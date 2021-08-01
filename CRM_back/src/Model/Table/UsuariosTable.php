<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Date;
use Cake\Auth\DefaultPasswordHasher;

/**
 * Usuarios Model
 *
 * @method \App\Model\Entity\Usuario newEmptyEntity()
 * @method \App\Model\Entity\Usuario newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Usuario[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Usuario get($primaryKey, $options = [])
 * @method \App\Model\Entity\Usuario findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Usuario patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Usuario[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Usuario|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Usuario saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Usuario[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Usuario[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Usuario[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Usuario[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class UsuariosTable extends Table
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

        $this->setTable('usuarios');
        $this->setDisplayField('id_usuario');
        $this->setPrimaryKey('id_usuario');

        $this->addBehavior('Timestamp');
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
            ->integer('id_usuario')
            ->allowEmptyString('id_usuario', null, 'create');

        $validator
            ->email('email')
            ->allowEmptyString('email');

        $validator
            ->scalar('senha')
            ->allowEmptyString('senha');

        $validator
            ->integer('permissao')
            ->allowEmptyString('permissao');

        return $validator;
    }

    public function genarateUserArray($user){
        
        $array = [
            'email' => $user->email,
            'senha'=> $user->senha,
            'permissao'=> $user->permissao
        ];

        return $array;
    }

    public function genarateUserArrayOnCreate($user,$permissao){
        if ($permissao == 0)
            $senha = "defaultadm123";
        else if ($permissao == 1)
            $senha = "defaultfunc123";

        $array = [
            'email' => $user->email,
            'senha'=> $this->_hashPassword($senha),
            'permissao'=> $permissao
        ];

        return $array;
    }

    public function _checkEmail($user,$permissao) {
        $query = $this->find('all',[
            'conditions' => ['email' => $user->email, 'permissao' => $permissao]
        ]);
        
        if ($query->toArray() != [])
            return true;
        else
            return false;
    }

    public function _hashPassword($password)
    {
        if (strlen($password) > 0) {
            return (new DefaultPasswordHasher)->hash($password);
        }
    }

    public function _checkCredentials($typed)
    {
        $realData = $this->find('all', [
            'conditions' => ['email' => $typed->email, 'permissao' => $typed->permissao]
        ]);

        if ($realData->toArray() != []) {
            $passwToCheck = $realData->first()->senha;
            return $this->_checkPassword($typed->senha, $passwToCheck);
        } else {
            return False;
        }
    }

    public function _checkPassword($passedPassword, $actualPassword) {
        if ((new DefaultPasswordHasher)->check($passedPassword, $actualPassword)) {
            return true;
        } else {
            return false;
        }
    }
}
