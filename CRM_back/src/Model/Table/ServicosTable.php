<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;

/**
 * Servicos Model
 *
 * @property \App\Model\Table\SetorsTable&\Cake\ORM\Association\BelongsTo $Setors
 *
 * @method \App\Model\Entity\Servico newEmptyEntity()
 * @method \App\Model\Entity\Servico newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Servico[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Servico get($primaryKey, $options = [])
 * @method \App\Model\Entity\Servico findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Servico patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Servico[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Servico|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Servico saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Servico[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Servico[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Servico[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Servico[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class ServicosTable extends Table
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

        $this->setTable('servicos');
        $this->setDisplayField('id_servico');
        $this->setPrimaryKey('id_servico');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Setors', [
            'foreignKey' => 'setor_id',
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
            ->integer('id_servico')
            ->allowEmptyString('id_servico', null, 'create');

        $validator
            ->scalar('nome')
            ->allowEmptyString('nome');

        $validator
            ->scalar('descricao')
            ->allowEmptyString('descricao');

        $validator
            ->numeric('valor')
            ->allowEmptyString('valor');

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
        $rules->add($rules->existsIn(['setor_id'], 'Setors'), ['errorField' => 'setor_id']);

        return $rules;
    }

    public function genarateServiceArray($servico){
        
        $array = [
            'nome' => $servico->nome,
            'descricao'=> $servico->descricao,
            'valor'=> $servico->valor,
            'setor_id'=> $servico->setor_id,
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        return $array;
    }
}
