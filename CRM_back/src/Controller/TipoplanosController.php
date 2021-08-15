<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Tipoplanos Controller
 *
 * @property \App\Model\Table\TipoplanosTable $Tipoplanos
 * @method \App\Model\Entity\Tipoplano[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class TipoplanosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $tipoplanos = $this->Tipoplanos->find('all',[
            'contain' => ['Planos'],
            'order' => ['id_tipoplano' => 'DESC']
        ]);

        $this->set(compact('tipoplanos'));
        $this->viewBuilder()->setOption('serialize', true);
        $this->RequestHandler->renderAs($this, 'json');
    }

    /**
     * View method
     *
     * @param string|null $id Tipoplano id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $tipoplano = $this->Tipoplanos->get($id, [
            'contain' => ['Planos'],
        ]);

        $this->set(compact('tipoplano'));
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
        $tipoplano = $this->Tipoplanos->newEmptyEntity();
        if ($this->request->is('post')) {
            $tipoplano = $this->Tipoplanos->patchEntity($tipoplano, $this->request->getData());
            if ($this->Tipoplanos->save($tipoplano)) {
                $this->Flash->success(__('The tipoplano has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The tipoplano could not be saved. Please, try again.'));
        }
        $this->set(compact('tipoplano'));
    }

    /**
     * Edit method
     *
     * @param string|null $id Tipoplano id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $tipoplano = $this->Tipoplanos->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $tipoplano = $this->Tipoplanos->patchEntity($tipoplano, $this->request->getData());
            if ($this->Tipoplanos->save($tipoplano)) {
                $this->Flash->success(__('The tipoplano has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The tipoplano could not be saved. Please, try again.'));
        }
        $this->set(compact('tipoplano'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Tipoplano id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $tipoplano = $this->Tipoplanos->get($id);
        if ($this->Tipoplanos->delete($tipoplano)) {
            $this->Flash->success(__('The tipoplano has been deleted.'));
        } else {
            $this->Flash->error(__('The tipoplano could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
