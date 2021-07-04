<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;

/**
 * Funcionarios Model
 *
 * @method \App\Model\Entity\Funcionario newEmptyEntity()
 * @method \App\Model\Entity\Funcionario newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Funcionario[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Funcionario get($primaryKey, $options = [])
 * @method \App\Model\Entity\Funcionario findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Funcionario patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Funcionario[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Funcionario|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Funcionario saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Funcionario[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Funcionario[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Funcionario[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Funcionario[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class FuncionariosTable extends Table
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

        $this->setTable('funcionarios');
        $this->setDisplayField('id_funcionario');
        $this->setPrimaryKey('id_funcionario');

        $this->addBehavior('Timestamp');

        $this->hasMany('Enderecos', [
            'foreignKey' => 'funcionario_id',
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
            ->integer('id_funcionario')
            ->allowEmptyString('id_funcionario', null, 'create');

        $validator
            ->scalar('nome')
            ->allowEmptyString('nome');

        $validator
            ->date('dt_nascimento')
            ->allowEmptyDate('dt_nascimento');

        $validator
            ->email('email')
            ->allowEmptyString('email');

        $validator
            ->scalar('fone')
            ->allowEmptyString('fone');

        return $validator;
    }

    public function genarateEmployeeArray($employee){
        
        $array = [
            'nome' => $employee->nome,
            'email'=> $employee->email,
            'fone'=> $employee->fone,
            'dt_nascimento'=> new Date($employee->dt_nascimento),
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        return $array;
    }

    public function verifyExistingAdress($id){
        $total = $this->Enderecos->find('all',['conditions' => [ 'functionario_id' => $id ] ])->count();
        $continuarExclusao = true;
        if ($total != 0) {
            $continuarExclusao = false;
        }
        return $continuarExclusao;
    }
}
