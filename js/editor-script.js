(function (blocks, editor, components, i18n, element) {
    var el = element.createElement;
    var registerBlockType = blocks.registerBlockType;
    var TextControl = wp.components.TextControl;
    var RichText = wp.editor.RichText;

    registerBlockType('my-text-block-plugin/text-block', {
        title: 'My Text Block',
        icon: 'text',
        category: 'common',
        attributes: {
            textContent: {
                type: 'string',
                source: 'text',
                selector: 'p',
            },
        },

        edit: function (props) {
            var content = props.attributes.textContent;

            function onChangeTextContent(newContent) {
                props.setAttributes({ textContent: newContent });
            }

            return el(RichText, {
                tagName: 'p',
                value: content,
                onChange: onChangeTextContent,
            });
        },

        save: function (props) {
            return el('p', { dangerouslySetInnerHTML: { __html: props.attributes.textContent } });
        },
    });
})(
    window.wp.blocks,
    window.wp.editor,
    window.wp.components,
    window.wp.i18n,
    window.wp.element
);
