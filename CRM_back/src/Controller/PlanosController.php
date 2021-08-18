<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Planos Controller
 *
 * @property \App\Model\Table\PlanosTable $Planos
 * @method \App\Model\Entity\Plano[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class PlanosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $planos = $this->Planos->find('all',[
            'contain' => ['Tipoplanos'],
            'order' => ['id_plano' => 'DESC']
        ]);

        $this->set(compact('planos'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Plano id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $plano = $this->Planos->get($id, [
            'contain' => ['Tipoplanos'],
        ]);

        $this->set(compact('plano'));
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

        $array_plano = $this->Planos->genaratePlansArray($data_json);

        $plano = $this->Planos->newEntity($array_plano);

        if ($this->Planos->save($plano)) {
            $message = "Plano Cadastrado com Sucesso!";
        } else {
            $message = "Plano Nao foi cadastrado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Edit method
     *
     * @param string|null $id Plano id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $data_json = $this->request->input('json_decode');

        $plano = $this->Planos->get($id, [
            'contain' => [],
        ]);

        $array_plano = $this->Planos->genaratePlansArray($data_json);

        $plano = $this->Planos->patchEntity($plano, $array_plano);
    
        if ($this->Planos->save($plano)) {
            $message = "Plano Editados com Sucesso!";
        } else {
            $message = "Plano Nao foi Alterado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * Delete method
     *
     * @param string|null $id Plano id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $plano = $this->Planos->get($id);

        if ($this->Planos->delete($plano)) {
            $message = "Plano Deletado com Sucesso!";
        } else {
            $message = "Plano Nao foi Deletado.";
        }

        $this->set(compact('message'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }
}
