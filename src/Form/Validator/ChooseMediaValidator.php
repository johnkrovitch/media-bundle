<?php

namespace JK\MediaBundle\Form\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class ChooseMediaValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if ($value['upload'] === null && $value['gallery'] === null) {
            $this->context->addViolation('jk_media.choose_media.empty_media');
        }
    }
}
