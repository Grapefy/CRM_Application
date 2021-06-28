<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Setors Controller
 *
 * @property \App\Model\Table\SetorsTable $Setors
 * @method \App\Model\Entity\Setor[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class SetorsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $setors = $this->Setors->find('all',[
            'order' => 'id_setor'
        ]);

        $this->set(compact('setors'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Setor id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $setor = $this->Setors->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('setor'));
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
        $data_json = $this->request->input('json_decode');

        $array_setor = $this->Setors->genarateSectorArray($data_json);

        $setor = $this->Setors->newEntity($array_setor);

        if ($this->Setors->save($setor)) {
            $message = "Setor Cadastrado com Sucesso!";
        } else {
            $message = "Setor Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Edit method
     *
     * @param string|null $id Setor id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $data_json = $this->request->input('json_decode');

        $setor = $this->Setors->get($id, [
            'contain' => [],
        ]);

        $array_setor = $this->Setors->genarateSectorArray($data_json);

        $setor = $this->Setors->patchEntity($setor, $array_setor);
    
        if ($this->Setors->save($setor)) {
            $message = "Setor Editados com Sucesso!";
        } else {
            $message = "Setor Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Setor id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $id = 3;
        $setor = $this->Setors->get($id);

        $continuarExclusao = $this->Setors->verifyExistingOffices($id);

        if ($continuarExclusao){
            if ($this->Setors->delete($setor)) {
                $message = "Setor Deletado com Sucesso!";
            } else {
                $message = "Setor Nao foi Deletado.";
            }
        } else {
            $message = "Existe um cargo atrelado a este setor.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
