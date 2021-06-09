<?php

$useCache = true;

foreach ($argv as $argument) {
    if ($argument === '--no-cache') {
        $useCache = false;
    }
}

$currentDirectory = __DIR__;
exec('mkdir -p '.__DIR__.'/../../app');
$appDirectory = realpath(__DIR__.'/../../app');
$bundleDirectory = realpath(__DIR__.'/../../../../media-bundle');

if (!$appDirectory) {
    throw new Exception('The app directory is invalid');
}

if (!$bundleDirectory) {
    throw new Exception('The bundle directory is invalid');
}

$appCommand = 'cd '.$appDirectory.' && ';

logMessage('Install functional tests Symfony application !');

if ($useCache && is_dir($appDirectory)) {
    logMessage('The Symfony application is found.');
} else {
    logMessage('No Symfony application was found or the --no-cache argument has been provided');
    exec('rm -rf '.$appDirectory);
    exec('mkdir -p '.$appDirectory);
    exec('symfony new --dir='.$appDirectory);
    logMessage('Symfony application installed');
}

logMessage('Merging the composer.json from the bundle into the app');
$composerContent = json_decode(file_get_contents($bundleDirectory.'/composer.json'), JSON_OBJECT_AS_ARRAY);
$appComposerContent = json_decode(file_get_contents($appDirectory.'/composer.json'), JSON_OBJECT_AS_ARRAY);

$appComposerContent['require'] = array_merge($appComposerContent['require'], $composerContent['require']);
$appComposerContent['require-dev'] = array_merge($appComposerContent['require-dev'], $composerContent['require-dev']);
$appComposerContent['autoload']['psr-4']['JK\\MediaBundle\\'] = 'bundle/src';

file_put_contents($appDirectory.'/composer.json', json_encode($appComposerContent, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
logMessage('The app composer.json updated');

logMessage('Updating composer dependencies...');
exec($appCommand.'composer update --ignore-platform-reqs');
logMessage('Composer dependencies updated');

logMessage('Copying bundles data');
exec('rm '.$appDirectory.'/bundle/src');
exec('ln -s '.$bundleDirectory.'/src/ '.$appDirectory.'/bundle/');

$content = file_get_contents($appDirectory.'/config/bundles.php');

if (strpos($content, 'JK\MediaBundle\JKMediaBundle::class') === false) {
    logMessage('Adding current bundle to bundles.php');
    $index = strrpos($content, ',');
    $before = substr($content, 0, $index + 1);
    $after = substr($content, $index + 2);
    $content = $before.PHP_EOL.'    JK\MediaBundle\JKMediaBundle::class => [\'all\' => true],'.PHP_EOL;
    $content .= $after;
    file_put_contents($appDirectory.'/config/bundles.php', $content);
}

logMessage('Copying fixtures...');
exec('rm -rf '.$appDirectory.'/config/packages/jk_media.yaml');
createLink($bundleDirectory.'/tests/fixtures/app/config/packages/jk_media.yaml', $appDirectory.'/config/packages');

exec('rm -rf '.$appDirectory.'/behat.yml');
createLink($bundleDirectory.'/tests/fixtures/app/behat.yml', $appDirectory.'/behat.yml');

exec('rm -rf '.$appDirectory.'/src/Controller');
createLink($bundleDirectory.'/tests/fixtures/app/src/Controller', $appDirectory.'/src/Controller');

exec('rm -rf '.$appDirectory.'/src/Form');
createLink($bundleDirectory.'/tests/fixtures/app/src/Form', $appDirectory.'/src/Form');

exec('rm -f '.$appDirectory.'/config/routes.yaml');
createLink($bundleDirectory.'/tests/fixtures/app/config/routes.yaml', $appDirectory.'/config/routes.yaml');

exec('rm -rf '.$appDirectory.'/templates');
createLink($bundleDirectory.'/tests/fixtures/app/templates', $appDirectory);

logMessage('Clear the cache');
exec($appCommand.'bin/console assets:install --symlink');
exec($appCommand.'bin/console ca:cl');

function logMessage(string $message): void
{
    echo $message.PHP_EOL;
}

function createLink(string $source, string $target): void
{
    exec('ln -s '.$source.' '.$target);
}
