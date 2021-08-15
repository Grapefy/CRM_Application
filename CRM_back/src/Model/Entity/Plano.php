<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Plano Entity
 *
 * @property int $id_plano
 * @property string|null $nome
 * @property string|null $recorrencia
 * @property float|null $valor
 * @property string|null $detalhes
 * @property int|null $tipoplano_id
 * @property \Cake\I18n\FrozenTime|null $created
 * @property \Cake\I18n\FrozenTime|null $modified
 *
 * @property \App\Model\Entity\Tipoplano $tipoplano
 */
class Plano extends Entity
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
        'recorrencia' => true,
        'valor' => true,
        'detalhes' => true,
        'tipoplano_id' => true,
        'created' => true,
        'modified' => true,
        'tipoplano' => true,
    ];
}
