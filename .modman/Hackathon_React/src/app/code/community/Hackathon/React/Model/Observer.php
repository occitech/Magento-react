<?php

class Hackathon_React_Model_Observer
{
    public function renderComponent(Varien_Event_Observer $event)
    {
        $block = $event->getEvent()->getBlock();
        if ($component = $block->getReactComponent()) {
            $this->render($component);
        }
    }

    protected function render($componentName)
    {
        Zend_Debug::dump($componentName);
        //TODO
    }
} 