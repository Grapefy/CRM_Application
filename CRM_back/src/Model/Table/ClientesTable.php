<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;

/**
 * Clientes Model
 *
 * @property \App\Model\Table\EnderecosTable&\Cake\ORM\Association\HasMany $Enderecos
 *
 * @method \App\Model\Entity\Cliente newEmptyEntity()
 * @method \App\Model\Entity\Cliente newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Cliente[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Cliente get($primaryKey, $options = [])
 * @method \App\Model\Entity\Cliente findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Cliente patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Cliente[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Cliente|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Cliente saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Cliente[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Cliente[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Cliente[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Cliente[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class ClientesTable extends Table
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

        $this->setTable('clientes');
        $this->setDisplayField('id_cliente');
        $this->setPrimaryKey('id_cliente');

        $this->addBehavior('Timestamp');

        $this->hasMany('Enderecos', [
            'foreignKey' => 'cliente_id',
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
            ->integer('id_cliente')
            ->allowEmptyString('id_cliente', null, 'create');

        $validator
            ->scalar('nome')
            ->allowEmptyString('nome');

        $validator
            ->email('email')
            ->allowEmptyString('email');

        $validator
            ->scalar('fone')
            ->allowEmptyString('fone');

        $validator
            ->boolean('is_empresa')
            ->allowEmptyString('is_empresa');

        $validator
            ->scalar('identificador')
            ->allowEmptyString('identificador');

        $validator
            ->date('dt_nascimento')
            ->allowEmptyDate('dt_nascimento');

        return $validator;
    }

    public function genarateCustomerArray($customer){
        $is_empresa = false;
        $idf = $customer->cpf;
        if ($idf == ''){
            $is_empresa = true;
            $idf = $customer->cnpj;
        }
        $array = [
            'nome' => $customer->nome,
            'email'=> $customer->email,
            'fone'=> $customer->fone,
            'is_empresa'=> $is_empresa,
            'identificador'=> $idf,
            'dt_nascimento'=> new Date($customer->dt_nascimento),
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        return $array;
    }

    public function verifyExistingAdress($id){
        $total = $this->Enderecos->find('all',['conditions' => [ 'cliente_id' => $id ] ])->count();
        $continuarExclusao = true;
        if ($total != 0) {
            $continuarExclusao = false;
        }
        return $continuarExclusao;
    }

}
