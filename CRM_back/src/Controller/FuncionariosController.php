<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Funcionarios Controller
 *
 * @property \App\Model\Table\FuncionariosTable $Funcionarios
 * @method \App\Model\Entity\Funcionario[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class FuncionariosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $funcionarios = $this->Funcionarios->find('all',[
            'order' => ['id_funcionario' => 'DESC']
        ]);

        $this->set(compact('funcionarios'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Funcionario id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $funcionario = $this->Funcionarios->get($id, [
            'contain' => ['Enderecos'],
        ]);

        $this->set(compact('funcionario'));
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

        $array_employee = $this->Funcionarios->genarateEmployeeArray($data_json[0]);

        $funcionario = $this->Funcionarios->newEntity($array_employee);

        if ($this->Funcionarios->save($funcionario)) {

            $array_address = $this->Enderecos->genarateAdressArray($data_json[1],null,null,$funcionario->id_funcionario);

            $endereco = $this->Enderecos->newEntity($array_address);

            if ($this->Enderecos->save($endereco)) {
                $message = "Funcionario e Endereco Cadastrados com Sucesso!";
            } else {
                $message = "Funcionario Cadastrado, mas o endereco nao pode ser cadastrado.";
            }
        } else {
            $message = "Funcionario Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Edit method
     *
     * @param string|null $id Funcionario id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $this->loadModel('Enderecos');

        $data_json = $this->request->input('json_decode');

        $funcionario = $this->Funcionarios->get($id, [
            'contain' => [],
        ]);

        $array_funcionario = $this->Funcionarios->genarateEmployeeArray($data_json[0]);

        $funcionario = $this->Funcionarios->patchEntity($funcionario, $array_funcionario);

        if ($this->Funcionarios->save($funcionario)) {

            $endereco = $this->Enderecos->get($data_json[3], [
                'contain' => [],
            ]);

            $array_address = $this->Enderecos->genarateAdressArray($data_json[1],null,null,$funcionario->id_funcionario);

            $endereco = $this->Enderecos->patchEntity($endereco, $array_address);

            if ($this->Enderecos->save($endereco)) {
                $message = "Funcionario e Endereco Editados com Sucesso!";
            } else {
                $message = "Funcionario Editado, mas o endereco nao pode ser cadastrado.";
            }

        } else {
            $message = "Funcionario Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Funcionario id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->loadModel('Enderecos');
        $funcionario = $this->Funcionarios->get($id);
        $message = $funcionario;
        if ($this->Enderecos->deleteAll(['funcionario_id' => $id])){
            if ($this->Funcionarios->delete($funcionario)) {
                $message = "Funcionario Deletado com Sucesso!";
            } else {
                $message = "Funcionario Nao foi Deletado.";
            }
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
