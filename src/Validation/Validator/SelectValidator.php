<?php

declare(strict_types=1);

namespace JK\MediaBundle\Validation\Validator;

use JK\MediaBundle\Entity\MediaInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class SelectValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if (MediaInterface::DATASOURCE_GALLERY === $value['selectType']) {
            if (!$value['gallery']) {
                $this
                    ->context
                    ->buildViolation('jk_media.select.missing_gallery_image')
                    ->atPath('gallery')
                    ->addViolation()
                ;
            }
        }

        if (MediaInterface::DATASOURCE_COMPUTER === $value['selectType']) {
            if (!$value['upload']) {
                $this
                    ->context
                    ->buildViolation('jk_media.select.missing_uploaded_file')
                    ->atPath('gallery')
                    ->addViolation()
                ;
            }
        }
    }
}
