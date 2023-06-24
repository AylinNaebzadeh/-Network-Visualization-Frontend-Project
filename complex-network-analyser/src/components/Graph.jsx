import React from 'react';
import G6 from '@antv/g6';

const Graph = ({ data }) => {
    const container = React.useRef(null);

    const mapNodeSize = (nodes, propertyName, visualRange) => {
        let minp = 9999999999;
        let maxp = -9999999999;
        nodes.forEach((node) => {
        node[propertyName] = Math.pow(node[propertyName], 1 / 3);
        minp = node[propertyName] < minp ? node[propertyName] : minp;
        maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
        });
        const rangepLength = maxp - minp;
        const rangevLength = visualRange[1] - visualRange[0];
        nodes.forEach((node) => {
        node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
        });
    };

    React.useEffect(() => {
        if (data) {
        const width = container.current.scrollWidth;
        const height = container.current.scrollHeight || 500;
        const graph = new G6.Graph({
            container: container.current,
            width,
            height,
            // ... other graph options
            defaultNode: {
                size: 2,
                style: {
                    fill: '#C6E5FF',
                    stroke: '#5B8FF9',
                    lineWidth: 0.3,
                },
                labelCfg: {
                    style: {
                    fontSize: 3,
                    },
                    position: 'right',
                    offset: 1,
                },
            },
            defaultEdge: {
                size: 0.1,
                color: '#333',
            },
            nodeStateStyles: {
                selected: {
                    fill: 'steelblue',
                    stroke: '#000',
                    lineWidth: 1,
                },
            },
            modes: {
                default: [
                    {
                    type: 'zoom-canvas',
                    enableOptimize: true,
                    optimizeZoom: 0.9,
                    },
                    {
                    type: 'drag-canvas',
                    enableOptimize: true,
                    },
                    'drag-node',
                    'brush-select',
                ],
            },
        });
        mapNodeSize(data.nodes, 'degree', [1, 10]);
        graph.data(data);
        graph.render();

        const graphData = graph.save();
        }
    }, [data]);

    return <div ref={container}></div>;
};

export default Graph
