<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Cargos Controller
 *
 * @property \App\Model\Table\CargosTable $Cargos
 * @method \App\Model\Entity\Cargo[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class CargosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $cargos = $this->Cargos->find('all',[
            'contain' => ['Setors'],
            'order' => ['id_cargo' => 'DESC']
        ]);

        $this->set(compact('cargos'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Cargo id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $cargo = $this->Cargos->get($id, [
            'contain' => ['Setors'],
        ]);

        $this->set(compact('cargo'));
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

        $array_cargo = $this->Cargos->genarateOfficeArray($data_json);

        $cargo = $this->Cargos->newEntity($array_cargo);

        if ($this->Cargos->save($cargo)) {
            $message = "Cargo Cadastrado com Sucesso!";
        } else {
            $message = "Cargo Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Edit method
     *
     * @param string|null $id Cargo id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $data_json = $this->request->input('json_decode');

        $cargo = $this->Cargos->get($id, [
            'contain' => [],
        ]);

        $array_cargo = $this->Cargos->genarateOfficeArray($data_json);

        $cargo = $this->Cargos->patchEntity($cargo, $array_cargo);
    
        if ($this->Cargos->save($cargo)) {
            $message = "Cargo Editados com Sucesso!";
        } else {
            $message = "Cargo Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Cargo id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $cargo = $this->Cargos->get($id);

        if ($this->Cargos->delete($cargo)) {
            $message = "Cargo Deletado com Sucesso!";
        } else {
            $message = "Cargo Nao foi Deletado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
