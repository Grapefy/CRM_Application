<?php
declare(strict_types=1);

namespace App\Controller;
use Cake\Event\Event;
use Cake\Network\Exception\UnauthorizedException;
use Cake\Utility\Security;
use Firebase\JWT\JWT;

/**
 * Usuarios Controller
 *
 * @property \App\Model\Table\UsuariosTable $Usuarios
 * @method \App\Model\Entity\Usuario[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsuariosController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->Auth->allow(['add', 'token']);
    }
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $usuarios = $this->Usuarios->find('all',[
            'order' => ['id_usuario' => 'DESC']
        ]);

        $this->set(compact('usuarios'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Usuario id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $usuario = $this->Usuarios->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('usuario'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        // $data_json = $this->request->input('json_decode');
        $data_json = (object) [
            'email' => 'lucas.firmianosg@gmail.com',
            'senha' => '123',
            'permissao' => 0
        ];

        $array_usuario = $this->Usuarios->genarateUserArray($data_json);

        $usuario = $this->Usuarios->newEntity($array_usuario);

        if ($this->Usuarios->save($usuario)) {
            $token = JWT::encode(
                [
                    'sub' => $usuario->id_usuario,
                    'exp' => time() + 604800
                ], Security::hash('CakePHP Framework', 'sha1', true)
            );
            $message = ["Usuario Cadastrado com Sucesso!", $token];
        } else {
            $message = "Usuario Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');

    }

    /**
     * Edit method
     *
     * @param string|null $id Usuario id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $data_json = $this->request->input('json_decode');

        $usuario = $this->Usuarios->get($id, [
            'contain' => [],
        ]);

        $array_usuario = $this->Usuarios->genarateUserArray($data_json);

        $usuario = $this->Usuarios->patchEntity($usuario, $array_usuario);
    
        if ($this->Usuarios->save($usuario)) {
            $message = "Usuario Editados com Sucesso!";
        } else {
            $message = "Usuario Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Usuario id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $usuario = $this->Usuarios->get($id);

        if ($this->Usuarios->delete($usuario)) {
            $message = "Usuario Deletado com Sucesso!";
        } else {
            $message = "Usuario Nao foi Deletado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    public function login() {
        $data_json = $this->request->input('json_decode');

        // $data_json = (object) [
        //     'email' => 'lucas.firmianosg@gmail.com',
        //     'senha' => 'defaultadm123',
        //     'permissao' => 0
        // ];

        $message = $this->Usuarios->_checkCredentials($data_json);

        // if ($userCanLogin) {
        //     // DO THINGS HERE
        //     $message = true;
        // } else {
        //     $message = false;
        // }
        
        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    public function checkRoute() {
        $_GlobalPermissions = [
            'administradores' => [0]
        ];

        $message = $this->request->input('json_decode');
        $R       = $message->route;
        $P       = $message->permission;

        if (in_array(intval($P),$_GlobalPermissions[$R])) {
            $message = true;
        } else {
            $message = false;
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    public function token()
{
    $user = $this->Auth->identify();
    debug($user);exit;
    // if (!$user) {
    //     $user = 'AAAAA';
    // }

    $this->set([
        'success' => true,
        'data' => [
            'token' => JWT::encode([
                'sub' => $user['id_usuario'],
                'exp' =>  time() + 604800
            ],
            Security::salt())
        ],
        '_serialize' => ['success', 'data']
    ]);

    // $this->set([
    //     'success' => true,
    //     'data' => [
    //         'token' => JWT::encode([
    //             'sub' => $user['id'],
    //             'exp' =>  time() + 604800
    //         ],
    //         Security::salt())
    //     ],
    //     '_serialize' => ['success', 'data']
    // ]);
}
}
