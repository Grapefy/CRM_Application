<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Administradors Controller
 *
 * @property \App\Model\Table\AdministradorsTable $Administradors
 * @method \App\Model\Entity\Administrador[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class AdministradorsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $administradors = $this->Administradors->find('all',[
            'order' => 'id_administrador'
        ]);

        $this->set(compact('administradors'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Administrador id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $administrador = $this->Administradors->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('administrador'));
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

        $array_administrator = $this->Administradors->genarateAdministratorArray($data_json[0]);

        $administrador = $this->Administradors->newEntity($array_administrator);

        if ($this->Administradors->save($administrador)) {

            $array_address = $this->Enderecos->genarateAdressArray($data_json[1],null,$administrador->id_administrador);

            $endereco = $this->Enderecos->newEntity($array_address);

            if ($this->Enderecos->save($endereco)) {
                $message = "Administrador e Endereco Cadastrados com Sucesso!";
            } else {
                $message = "Administrador Cadastrado, mas o endereco nao pode ser cadastrado.";
            }
        } else {
            $message = "Administrador Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');

    }

    /**
     * Edit method
     *
     * @param string|null $id Administrador id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $administrador = $this->Administradors->get($id, [
            'contain' => [],
        ]);

        $alteracao = ['nome' => 'LUCAS FIRMIANO SILVA GIRAO'];

        $administrador = $this->Administradors->patchEntity($administrador, $alteracao);

        if ($this->Administradors->save($administrador)) {
            $message = "Administrador Alterado com Sucesso!";
        } else {
            $message = "Administrador Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Administrador id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        // $continuarExclusao = $this->Administradors->verifyExistingAdress($id);

        // if ($continuarExclusao){
        $this->loadModel('Enderecos');
        $administrador = $this->Administradors->get($id);
        if ($this->Enderecos->deleteAll(['administrador_id' => $id])){
            if ($this->Administradors->delete($administrador)) {
                $message = "Administrador Deletado com Sucesso!";
            } else {
                $message = "Administrador Nao foi Deletado.";
            }
        }
        // } else {
        //     $message = "Existe um endereco atrelado a esse administrador";
        // }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
