<?php

require BP . DS . '../vendor/reactjs/react-php-v8js/ReactJS.php';

class Hackathon_React_Model_Observer
{

    public function renderComponent(Varien_Event_Observer $event)
    {
        $block = $event->getEvent()->getBlock();
        if ($component = $block->getReactComponent()) {
            $this->render($component, $block->getReactProps());
        }
    }

    protected function render($componentName, $props)
    {
        // Zend_Debug::dump($componentName);
        // Zend_Debug::dump($props);
        $bundle_source = file_get_contents(BP . DS . 'js/bundle.js');
        $react_source = file_get_contents(BP . DS . 'js/vendor.bundle.js');
        $rjs = new ReactJS($react_source, $bundle_source);
        $rjs->setComponent($componentName, $props);
        echo $rjs->getMarkup();
        printf('<script type="text/javascript">%s</script>', $rjs->getJS('document.querySelector(".sidebar")'));
    }
}