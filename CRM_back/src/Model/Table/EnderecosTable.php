<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;

/**
 * Enderecos Model
 *
 * @property \App\Model\Table\ClientesTable&\Cake\ORM\Association\BelongsTo $Clientes
 * @property \App\Model\Table\AdministradorsTable&\Cake\ORM\Association\BelongsTo $Administradors
 *
 * @method \App\Model\Entity\Endereco newEmptyEntity()
 * @method \App\Model\Entity\Endereco newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Endereco[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Endereco get($primaryKey, $options = [])
 * @method \App\Model\Entity\Endereco findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Endereco patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Endereco[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Endereco|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Endereco saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Endereco[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Endereco[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Endereco[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Endereco[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class EnderecosTable extends Table
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

        $this->setTable('enderecos');
        $this->setDisplayField('id_endereco');
        $this->setPrimaryKey('id_endereco');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Clientes', [
            'foreignKey' => 'cliente_id',
        ]);
        $this->belongsTo('Administradors', [
            'foreignKey' => 'administrador_id',
        ]);
        $this->belongsTo('Funcionarios', [
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
            ->integer('id_endereco')
            ->allowEmptyString('id_endereco', null, 'create');

        $validator
            ->scalar('cep')
            ->allowEmptyString('cep');

        $validator
            ->scalar('logradouro')
            ->allowEmptyString('logradouro');

        $validator
            ->scalar('bairro')
            ->allowEmptyString('bairro');

        $validator
            ->scalar('uf')
            ->allowEmptyString('uf');

        $validator
            ->decimal('numero')
            ->allowEmptyString('numero');

        $validator
            ->scalar('complemento')
            ->allowEmptyString('complemento');

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
        $rules->add($rules->existsIn(['cliente_id'], 'Clientes'), ['errorField' => 'cliente_id']);
        $rules->add($rules->existsIn(['administrador_id'], 'Administradors'), ['errorField' => 'administrador_id']);
        $rules->add($rules->existsIn(['funcionario_id'], 'Funcionarios'), ['errorField' => 'funcionario_id']);

        return $rules;
    }

    public function genarateAdressArray($address,$id,$id_adm,$id_func){

        $array = [
            'cep' => $address->cep,
            'logradouro' => $address->logradouro,
            'bairro' => $address->bairro,
            'uf' => $address->uf,
            'numero' => $address->numero,
            'complemento' => $address->complemento,
            'cliente_id' => $id,
            'administrador_id' => null,
            'funcionario_id' => null,
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        if ($id_adm != null) {
            $array['cliente_id'] = null;
            $array['administrador_id'] = $id_adm;
        } else if ($id_func != null) {
            $array['cliente_id'] = null;
            $array['administrador_id'] = null;
            $array['funcionario_id'] = $id_func;
        }

        return $array;
    }
}
