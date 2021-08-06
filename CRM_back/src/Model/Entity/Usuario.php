<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Usuario Entity
 *
 * @property int $id_usuario
 * @property string|null $email
 * @property string|null $senha
 * @property int|null $permissao
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 */
class Usuario extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'email' => true,
        'senha' => true,
        'permissao' => true,
        'created' => true,
        'modified' => true,
    ];
}
