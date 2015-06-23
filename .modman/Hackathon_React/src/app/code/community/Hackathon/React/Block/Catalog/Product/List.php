<?php

class Hackathon_React_Block_Catalog_Product_List extends Mage_Catalog_Block_Product_List {
    public function productsForReactComponent()
    {
        $products = [];
        foreach ($this->_getProductCollection() as $product) {
            $product->setImage($this->helper('catalog/image')->init($product, 'small_image')->keepFrame(false)->resize(300));
            $products[] = $product->getData();
        }

        return $products;
    }
}