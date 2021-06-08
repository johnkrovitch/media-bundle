<?php

declare(strict_types=1);

namespace JK\MediaBundle\Validation\Constraints;

use JK\MediaBundle\Validation\Validator\SelectValidator;
use Symfony\Component\Validator\Constraint;

class SelectConstraint extends Constraint
{
    public function validatedBy(): string
    {
        return SelectValidator::class;
    }
}
