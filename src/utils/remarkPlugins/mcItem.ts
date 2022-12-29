import { visitParents } from "unist-util-visit-parents"

export default function remarkMcItem() {
    return function (tree) {
        visitParents(tree, 'heading', (upperNode, parents) => {
            let node = upperNode.children[upperNode.children.length - 1];

            if (!node) {
                return;
            }

            const value = String(node.value).trim();
            const regex = /\[MCITEM:(.+)\]/;
            if (regex.test(value)) {
                const siblings = upperNode.children;
                const matched = value.match(/\[MCITEM:(.+)\]/);
                node.value = node.value.replace(matched[0], '')
                const icon = matched[1];
                const url = '/items/' + icon + '.png';

                const image = {
                    type: 'image',
                    url: url,
                    title: icon,
                    alt: icon,
                    position: node.position,
                    data: {
                        class: 'inline-block',
                        hProperties: {
                            class: 'inline-block align-center'
                        }
                    }
                }

                siblings.unshift(image);
                upperNode.data = {
                    class: 'not-prose',
                    hProperties: {
                        class: 'not-prose'
                    }
                }
            }
        })
    }
}