<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;

/**
 * Planos Model
 *
 * @property \App\Model\Table\TipoplanosTable&\Cake\ORM\Association\BelongsTo $Tipoplanos
 *
 * @method \App\Model\Entity\Plano newEmptyEntity()
 * @method \App\Model\Entity\Plano newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Plano[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Plano get($primaryKey, $options = [])
 * @method \App\Model\Entity\Plano findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Plano patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Plano[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Plano|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Plano saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Plano[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Plano[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Plano[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Plano[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class PlanosTable extends Table
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

        $this->setTable('planos');
        $this->setDisplayField('id_plano');
        $this->setPrimaryKey('id_plano');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Tipoplanos', [
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
            ->integer('id_plano')
            ->allowEmptyString('id_plano', null, 'create');

        $validator
            ->scalar('nome')
            ->allowEmptyString('nome');

        $validator
            ->scalar('recorrencia')
            ->allowEmptyString('recorrencia');

        $validator
            ->numeric('valor')
            ->allowEmptyString('valor');

        $validator
            ->scalar('detalhes')
            ->allowEmptyString('detalhes');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules): RulesChecker
    {
        $rules->add($rules->existsIn(['tipoplano_id'], 'Tipoplanos'), ['errorField' => 'tipoplano_id']);

        return $rules;
    }

    public function genaratePlansArray($plano){
        
        $array = [
            'nome' => $plano->nome,
            'recorrencia'=> $plano->recorrencia,
            'valor'=> $plano->valor,
            'detalhes'=> $plano->detalhes,
            'tipoplano_id'=> $plano->tipoplano,
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        return $array;
    }
}
