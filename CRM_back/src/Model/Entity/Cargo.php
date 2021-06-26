<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Cargo Entity
 *
 * @property int $id_cargo
 * @property string|null $nome
 * @property string|null $descricao
 * @property float|null $salario_bruto
 * @property int|null $setor_id
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 *
 * @property \App\Model\Entity\Setor $setor
 */
class Cargo extends Entity
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
        'descricao' => true,
        'salario_bruto' => true,
        'setor_id' => true,
        'created' => true,
        'modified' => true,
        'setor' => true,
    ];
}
