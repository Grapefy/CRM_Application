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

        $data_json = $this->request->input('json_decode');

        $array_customer = $this->Clientes->genarateCustomerArray($data_json[0]);

        $cliente = $this->Clientes->newEntity($array_customer);

        if ($this->Clientes->save($cliente)) {

            $array_address = $this->Enderecos->genarateAdressArray($data_json[1],$cliente->id_cliente,null);

            $endereco = $this->Enderecos->newEntity($array_address);

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
        $this->loadModel('Enderecos');

        $data_json = $this->request->input('json_decode');

        $cliente = $this->Clientes->get($id, [
            'contain' => [],
        ]);

        $array_customer = $this->Clientes->genarateCustomerArray($data_json[0]);

        $cliente = $this->Clientes->patchEntity($cliente, $array_customer);

        if ($this->Clientes->save($cliente)) {

            $endereco = $this->Enderecos->get($data_json[3], [
                'contain' => [],
            ]);

            $array_address = $this->Enderecos->genarateAdressArray($data_json[1],$cliente->id_cliente,null);

            $endereco = $this->Enderecos->patchEntity($endereco, $array_address);
            
            if ($this->Enderecos->save($endereco)) {
                $message = "Cliente e Endereco Editados com Sucesso!";
            } else {
                $message = "Cliente Editado, mas o endereco nao pode ser cadastrado.";
            }

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
        // $continuarExclusao = $this->Clientes->verifyExistingAdress($id);

        $this->loadModel('Enderecos');
        $cliente = $this->Clientes->get($id);
        if ($this->Enderecos->deleteAll(['cliente_id' => $id])){
            if ($this->Clientes->delete($cliente)) {
                $message = "Cliente Deletado com Sucesso!";
            } else {
                $message = "Cliente Nao foi Deletado.";
            }
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
