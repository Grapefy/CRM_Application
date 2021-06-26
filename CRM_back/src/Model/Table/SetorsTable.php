<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;

/**
 * Setors Model
 *
 * @method \App\Model\Entity\Setor newEmptyEntity()
 * @method \App\Model\Entity\Setor newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Setor[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Setor get($primaryKey, $options = [])
 * @method \App\Model\Entity\Setor findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Setor patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Setor[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Setor|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Setor saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Setor[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Setor[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Setor[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Setor[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class SetorsTable extends Table
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

        $this->setTable('setors');
        $this->setDisplayField('id_setor');
        $this->setPrimaryKey('id_setor');

        $this->addBehavior('Timestamp');

        $this->hasMany('Cargos', [
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
            ->integer('id_setor')
            ->allowEmptyString('id_setor', null, 'create');

        $validator
            ->scalar('nome')
            ->allowEmptyString('nome');

        $validator
            ->scalar('responsavel')
            ->allowEmptyString('responsavel');

        $validator
            ->scalar('descricao')
            ->allowEmptyString('descricao');

        return $validator;
    }

    public function genarateSectorArray($setor){
        
        $array = [
            'nome' => $setor->setor,
            'responsavel'=> $setor->responsavel,
            'descricao'=> $setor->descricao,
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        return $array;
    }

    public function verifyExistingOffices($id){
        $query = $this->Cargos->find('all',[
            'conditions' => ['setor_id' => $id]
        ])->count();

        if ($query == 0){
            return true;
        } else {
            return false;
        }
    }

}
