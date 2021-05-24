<?php

namespace App\Controller;

use Symfony\Component\Form\FormFactoryInterface;
use Twig\Environment;

class FormAction
{
    private FormFactoryInterface $formFactory;
    private Environment $environment;

    public function __construct(FormFactoryInterface $formFactory, Environment $environment)
    {
        $this->formFactory = $formFactory;
        $this->environment = $environment;
    }

    public function __invoke()
    {

    }
}
