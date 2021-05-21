<?php

$useCache = true;

foreach ($argv as $argument) {
    if ($argument === '--no-cache') {
        $useCache = false;
    }
}

$currentDirectory = __DIR__;
$appDirectory = realpath(__DIR__.'/../../app');
$bundleDirectory = realpath(__DIR__.'/../../..');

$appCommand = 'cd '.$appDirectory.' && ';

logMessage('Install functional tests Symfony application !');

if ($useCache && is_dir($appDirectory)) {
    logMessage('The Symfony application is found.');
} else {
    logMessage('No Symfony application was found or the --no-cache argument has been provided');
    exec('rm -rf '.$appDirectory);
    exec('mkdir '.$appDirectory);
    exec('symfony new --dir='.$appDirectory);
    logMessage('Symfony application installed');
}

logMessage('Merging the composer.json from the bundle into the app');
$composerContent = json_decode(file_get_contents($bundleDirectory.'/composer.json'), JSON_OBJECT_AS_ARRAY);
$appComposerContent = json_decode(file_get_contents($appDirectory.'/composer.json'), JSON_OBJECT_AS_ARRAY);

$appComposerContent['require'] = array_merge($appComposerContent['require'], $composerContent['require']);
$appComposerContent['require-dev'] = array_merge($appComposerContent['require-dev'], $composerContent['require-dev']);
$appComposerContent['autoload']['psr-4']['JK\\MediaBundle\\'] = 'bundle/';

file_put_contents($appDirectory.'/composer.json', json_encode($appComposerContent, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
logMessage('The app composer.json updated');

logMessage('Updating composer dependencies...');
exec($appCommand.'composer update --ignore-platform-reqs');
logMessage('Composer dependencies updated');

logMessage('Copying bundles data');
exec($appCommand.'mkdir -p bundle');
exec('cp -r -f '.$bundleDirectory.'/src/* '.$appDirectory.'/bundle/');

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
exec('cp '.$bundleDirectory.'/tests/fixtures/app/jk_media.yaml '.$appDirectory.'/config/packages');
exec('cp '.$bundleDirectory.'/tests/fixtures/app/behat.yml '.$appDirectory);
exec('cp '.$bundleDirectory.'/tests/fixtures/app/Controller/* '.$appDirectory.'/src/Controller');
exec('cp -r '.$bundleDirectory.'/tests/fixtures/app/Form '.$appDirectory.'/src/Form');

logMessage('Clear the cache');
exec($appCommand.'bin/console ca:cl');

function logMessage(string $message): void
{
    echo $message.PHP_EOL;
}
