<?php
declare(strict_types=1);

namespace App\Controller;
use Cake\I18n\Date;

/**
 * Clientes Controller
 *
 * @property \App\Model\Table\ClientesTable $Clientes
 * @method \App\Model\Entity\Cliente[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ClientesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $clientes = $this->Clientes->find('all',[
            'order' => 'id_cliente'
        ]);

        $this->set(compact('clientes'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Cliente id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $cliente = $this->Clientes->get($id, [
            'contain' => ['Enderecos'],
        ]);

        $this->set(compact('cliente'));
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
        $this->loadModel('Enderecos');

        $cliente = $this->Clientes->newEmptyEntity();
        $endereco = $this->Enderecos->newEmptyEntity();

        $array = [
            'nome' => 'LUCAS FIRMIANO SILVA GIRAO',
            'email'=> 'lucas.firmianosg@gmail.com',
            'fone'=> '997028392',
            'is_empresa'=> false,
            'identificador'=> '068681043-08',
            'dt_nascimento'=> Date::now(),
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        $array_endereco = [
            'cep' => '60455-365',
            'logradouro' => 'RUA PADRE GUERRA',
            'bairro' => 'PARQUELANDIA',
            'uf' => 'CE',
            'numero' => 1045,
            'complemento' => 'CASA A',
            'cliente_id' => null,
            'created'=> Date::now(),
            'modified'=> Date::now()
        ];

        $cliente = $this->Clientes->patchEntity($cliente, $array);

        if ($this->Clientes->save($cliente)) {
            $array_endereco['cliente_id'] = $cliente->id_cliente;
            $endereco = $this->Enderecos->patchEntity($endereco, $array_endereco);
            if ($this->Enderecos->save($endereco)) {
                $message = "Cliente e Endereco Cadastrados com Sucesso!";
            } else {
                $message = "Cliente Cadastrado, mas o endereco nao pode ser cadastrado.";
            }
        } else {
            $message = "Cliente Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Edit method
     *
     * @param string|null $id Cliente id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $cliente = $this->Clientes->get($id, [
            'contain' => [],
        ]);

        $alteracao = ['nome' => 'LUCAS FIRMIANO SILVA GIRAO'];

        $cliente = $this->Clientes->patchEntity($cliente, $alteracao);

        if ($this->Clientes->save($cliente)) {
            $message = "Cliente Alterado com Sucesso!";
        } else {
            $message = "Cliente Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Cliente id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        // $this->request->allowMethod(['post', 'delete']);

        $cliente = $this->Clientes->get($id);

        if ($this->Clientes->delete($cliente)) {
            $message = "Cliente Deletado com Sucesso!";
        } else {
            $message = "Cliente Nao foi Deletado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
