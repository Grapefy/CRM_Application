<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Cliente Entity
 *
 * @property int $id_cliente
 * @property string|null $nome
 * @property string|null $email
 * @property string|null $fone
 * @property bool|null $is_empresa
 * @property string|null $identificador
 * @property \Cake\I18n\FrozenDate|null $dt_nascimento
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 *
 * @property \App\Model\Entity\Endereco[] $enderecos
 */
class Cliente extends Entity
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
        'nome' => true,
        'email' => true,
        'fone' => true,
        'is_empresa' => true,
        'identificador' => true,
        'dt_nascimento' => true,
        'created' => true,
        'modified' => true,
        'enderecos' => true,
    ];
}
