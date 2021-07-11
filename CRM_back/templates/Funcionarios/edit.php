<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Funcionario $funcionario
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $funcionario->id_funcionario],
                ['confirm' => __('Are you sure you want to delete # {0}?', $funcionario->id_funcionario), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Funcionarios'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="funcionarios form content">
            <?= $this->Form->create($funcionario) ?>
            <fieldset>
                <legend><?= __('Edit Funcionario') ?></legend>
                <?php
                    echo $this->Form->control('nome');
                    echo $this->Form->control('dt_nascimento', ['empty' => true]);
                    echo $this->Form->control('email');
                    echo $this->Form->control('fone');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
