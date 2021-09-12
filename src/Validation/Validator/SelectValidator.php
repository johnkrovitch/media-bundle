<?php

declare(strict_types=1);

namespace JK\MediaBundle\Validation\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class SelectValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if ($value['gallery'] === null && $value['upload'] === null) {
            $this
                ->context
                ->addViolation('jk_media.select.either_an_upload_or_a_gallery')
            ;
        }
    }
}
