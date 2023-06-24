import React from 'react';
import G6 from '@antv/g6';

const Graph = ({ data }) => {
    const container = React.useRef(null);

    React.useEffect(() => {
        if (data) {
        const width = container.current.scrollWidth;
        const height = container.current.scrollHeight || 500;
        const graph = new G6.Graph({
            container: container.current,
            width,
            height,
            // ... other graph options
        });
        graph.data(data);
        graph.render();
        }
    }, [data]);

    return <div ref={container}></div>;
};

export default Graph
