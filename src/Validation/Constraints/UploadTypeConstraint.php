<?php

namespace JK\MediaBundle\Validation\Constraints;

use JK\MediaBundle\Validation\Validator\UploadValidator;
use Symfony\Component\Validator\Constraint;

class UploadTypeConstraint extends Constraint
{
    public function validatedBy()
    {
        return UploadValidator::class;
    }
}
