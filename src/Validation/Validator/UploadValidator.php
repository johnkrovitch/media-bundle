<?php

namespace JK\MediaBundle\Validation\Validator;

use JK\MediaBundle\Form\Type\MediaType;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class UploadValidator extends ConstraintValidator
{
    public function validate($data, Constraint $constraint)
    {
        if (MediaType::CHOOSE_FROM_COLLECTION === $data['uploadType']) {
            if (!$data['gallery']) {
                $this
                    ->context
                    ->buildViolation('media.form.missing_gallery_image')
                    ->atPath('gallery')
                    ->addViolation()
                ;
            }
        }
    }
}
