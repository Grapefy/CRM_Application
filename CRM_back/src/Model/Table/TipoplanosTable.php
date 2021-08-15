<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Tipoplanos Model
 *
 * @property \App\Model\Table\PlanosTable&\Cake\ORM\Association\HasMany $Planos
 *
 * @method \App\Model\Entity\Tipoplano newEmptyEntity()
 * @method \App\Model\Entity\Tipoplano newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Tipoplano[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Tipoplano get($primaryKey, $options = [])
 * @method \App\Model\Entity\Tipoplano findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Tipoplano patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Tipoplano[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Tipoplano|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Tipoplano saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Tipoplano[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Tipoplano[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Tipoplano[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Tipoplano[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class TipoplanosTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('tipoplanos');
        $this->setDisplayField('id_tipoplano');
        $this->setPrimaryKey('id_tipoplano');

        $this->addBehavior('Timestamp');

        $this->hasMany('Planos', [
            'foreignKey' => 'tipoplano_id',
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->integer('id_tipoplano')
            ->allowEmptyString('id_tipoplano', null, 'create');

        $validator
            ->scalar('nome')
            ->allowEmptyString('nome');

        return $validator;
    }
}
