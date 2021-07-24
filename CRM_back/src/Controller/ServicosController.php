<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Servicos Controller
 *
 * @property \App\Model\Table\ServicosTable $Servicos
 * @method \App\Model\Entity\Servico[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ServicosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $servicos = $this->Servicos->find('all',[
            'contain' => ['Setors'],
            'order' => ['id_servico' => 'DESC']
        ]);

        $this->set(compact('servicos'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Servico id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $servico = $this->Servicos->get($id, [
            'contain' => ['Setors'],
        ]);

        $this->set(compact('servico'));
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

        $array_servico = $this->Servicos->genarateServiceArray($data_json);

        $servico = $this->Servicos->newEntity($array_servico);

        if ($this->Servicos->save($servico)) {
            $message = "Servico Cadastrado com Sucesso!";
        } else {
            $message = "Servico Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Edit method
     *
     * @param string|null $id Servico id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $data_json = $this->request->input('json_decode');

        $servico = $this->Servicos->get($id, [
            'contain' => [],
        ]);

        $array_servico = $this->Servicos->genarateOfficeArray($data_json);

        $servico = $this->Servicos->patchEntity($servico, $array_servico);
    
        if ($this->Servicos->save($servico)) {
            $message = "Servico Editados com Sucesso!";
        } else {
            $message = "Servico Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Servico id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $servico = $this->Servicos->get($id);

        if ($this->Servicos->delete($servico)) {
            $message = "Servico Deletado com Sucesso!";
        } else {
            $message = "Servico Nao foi Deletado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
