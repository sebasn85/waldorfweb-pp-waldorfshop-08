<?php
namespace Waldorfshop8\Providers;

use Plenty\Modules\Webshop\ItemSearch\Helpers\ResultFieldTemplate;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;

/**
 * Isolated compatibility layer. Waldorfshop7 stays active and owns the
 * existing configuration, routes and ShopBuilder widget identifiers.
 */
class ThemeServiceProvider extends TemplateServiceProvider
{
    public function boot()
    {
        $this->overrideTemplate('Ceres::PageDesign.PageDesign', 'Waldorfshop8::PageDesign.PageDesign');
        $this->overrideTemplate('Waldorfshop7::PageDesign.PageDesign', 'Waldorfshop8::PageDesign.PageDesign');

        /** @var ResultFieldTemplate $resultFields */
        $resultFields = pluginApp(ResultFieldTemplate::class);
        $resultFields->setTemplates([
            ResultFieldTemplate::TEMPLATE_CATEGORY_TREE => 'Waldorfshop7::ResultFields.CategoryTree',
            ResultFieldTemplate::TEMPLATE_LIST_ITEM => 'Waldorfshop7::ResultFields.ListItem',
            ResultFieldTemplate::TEMPLATE_SINGLE_ITEM => 'Waldorfshop8::ResultFields.SingleItem',
        ]);
    }
}
