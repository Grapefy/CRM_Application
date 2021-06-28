<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Endereco Entity
 *
 * @property int $id_endereco
 * @property string|null $cep
 * @property string|null $logradouro
 * @property string|null $bairro
 * @property string|null $uf
 * @property string|null $numero
 * @property string|null $complemento
 * @property int|null $cliente_id
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 * @property int|null $administrador_id
 *
 * @property \App\Model\Entity\Cliente $cliente
 * @property \App\Model\Entity\Administrador $administrador
 */
class Endereco extends Entity
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
        'cep' => true,
        'logradouro' => true,
        'bairro' => true,
        'uf' => true,
        'numero' => true,
        'complemento' => true,
        'cliente_id' => true,
        'created' => true,
        'modified' => true,
        'administrador_id' => true,
        'cliente' => true,
        'administrador' => true,
    ];
}
