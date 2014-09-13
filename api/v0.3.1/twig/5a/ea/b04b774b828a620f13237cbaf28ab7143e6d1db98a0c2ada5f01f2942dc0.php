<?php

/* default/layout/page.twig */
class __TwigTemplate_5aeab04b774b828a620f13237cbaf28ab7143e6d1db98a0c2ada5f01f2942dc0 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("layout/layout.twig");

        $this->blocks = array(
            'frame' => array($this, 'block_frame'),
            'header' => array($this, 'block_header'),
            'content_header' => array($this, 'block_content_header'),
            'footer' => array($this, 'block_footer'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout/layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_frame($context, array $blocks = array())
    {
        // line 4
        echo "    <li><a href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('sami')->pathForStaticFile($context, "index.html"), "html", null, true);
        echo "\" target=\"_top\">Frames</a></li>
    <li><a href=\"#\" target=\"_top\">No Frames</a></li>
";
    }

    // line 8
    public function block_header($context, array $blocks = array())
    {
        // line 9
        echo "    <div class=\"header\">
        <ul>
            <li><a href=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->env->getExtension('sami')->pathForStaticFile($context, "classes.html"), "html", null, true);
        echo "\">Classes</a></li>
            ";
        // line 12
        if ((isset($context["has_namespaces"]) ? $context["has_namespaces"] : $this->getContext($context, "has_namespaces"))) {
            // line 13
            echo "                <li><a href=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('sami')->pathForStaticFile($context, "namespaces.html"), "html", null, true);
            echo "\">Namespaces</a></li>
            ";
        }
        // line 15
        echo "            <li><a href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('sami')->pathForStaticFile($context, "interfaces.html"), "html", null, true);
        echo "\">Interfaces</a></li>
            <li><a href=\"";
        // line 16
        echo twig_escape_filter($this->env, $this->env->getExtension('sami')->pathForStaticFile($context, "traits.html"), "html", null, true);
        echo "\">Traits</a></li>
            <li><a href=\"";
        // line 17
        echo twig_escape_filter($this->env, $this->env->getExtension('sami')->pathForStaticFile($context, "doc-index.html"), "html", null, true);
        echo "\">Index</a></li>
            ";
        // line 18
        $this->displayBlock("frame", $context, $blocks);
        echo "
        </ul>

        <div id=\"title\">";
        // line 21
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["project"]) ? $context["project"] : $this->getContext($context, "project")), "config", array(0 => "title"), "method"), "html", null, true);
        echo "</div>

        ";
        // line 23
        $this->displayBlock('content_header', $context, $blocks);
        // line 24
        echo "    </div>
";
    }

    // line 23
    public function block_content_header($context, array $blocks = array())
    {
        echo "";
    }

    // line 27
    public function block_footer($context, array $blocks = array())
    {
        // line 28
        echo "    <div id=\"footer\">
        Generated by <a href=\"http://sami.sensiolabs.org/\" target=\"_top\">Sami, the API Documentation Generator</a>.
    </div>
";
    }

    public function getTemplateName()
    {
        return "default/layout/page.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 27,  92 => 23,  85 => 23,  74 => 18,  61 => 15,  45 => 9,  144 => 39,  136 => 36,  129 => 35,  125 => 33,  118 => 32,  114 => 30,  105 => 29,  101 => 28,  95 => 25,  88 => 23,  72 => 18,  66 => 16,  55 => 13,  26 => 3,  43 => 8,  41 => 7,  21 => 2,  379 => 58,  363 => 56,  358 => 55,  355 => 54,  350 => 53,  333 => 52,  331 => 51,  329 => 50,  318 => 49,  303 => 46,  291 => 45,  265 => 40,  261 => 39,  258 => 37,  255 => 35,  253 => 34,  236 => 33,  234 => 32,  222 => 31,  211 => 28,  205 => 27,  199 => 26,  185 => 25,  174 => 22,  168 => 21,  162 => 20,  148 => 19,  135 => 16,  133 => 15,  126 => 13,  119 => 11,  117 => 10,  104 => 9,  53 => 12,  37 => 6,  34 => 4,  25 => 4,  19 => 1,  110 => 32,  103 => 28,  99 => 26,  90 => 27,  87 => 24,  83 => 22,  79 => 23,  64 => 16,  62 => 15,  52 => 11,  49 => 11,  46 => 9,  40 => 7,  80 => 21,  76 => 22,  71 => 19,  60 => 13,  56 => 12,  50 => 9,  31 => 3,  94 => 28,  91 => 25,  84 => 8,  81 => 7,  75 => 5,  68 => 18,  65 => 18,  47 => 10,  44 => 9,  35 => 10,  29 => 6,  22 => 8,  70 => 17,  58 => 14,  54 => 11,  51 => 12,  48 => 9,  42 => 8,  38 => 7,  33 => 5,  30 => 3,  28 => 3,);
    }
}
