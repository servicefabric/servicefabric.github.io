class LineChart {
    constructor(container, futureData, layout) {
        this.containerId = container;
        futureData.then((data) => {
            this._render(data, layout);
        });
    }

    _render(data, layout) {
        Plotly.newPlot(this.containerId, data, layout);
    }
}



