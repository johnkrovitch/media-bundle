<?php

namespace JK\MediaBundle\Form\Constraint;

use JK\MediaBundle\Form\Validator\ChooseMediaValidator;
use Symfony\Component\Validator\Constraint;

class ChooseMedia extends Constraint
{
    public function validatedBy(): string
    {
        return ChooseMediaValidator::class;
    }
}
