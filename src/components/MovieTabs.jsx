import React from "react";

export default class MovieTabs extends React.Component {

    state = {
        sortList: [
            {
                title: 'Popularity desc',
                sortBy: 'popularity.desc',
            },
            {
                title: 'Revenue desc',
                sortBy: 'revenue.desc',
            },
            {
                title: 'Release date desc',
                sortBy: 'release_date.desc',
            }
        ]
    }

    getClassName = (value) => {
        return `nav-link ${this.props.sortBy === value ? 'active' : ''}`;
    }

    render() {
        const {sortList} = this.state;
        const {onChangeSortBy} = this.props;
        return (
            <ul className="nav nav-tabs nav-pills">
                {
                    sortList.map(list => {
                        return (
                            <li key={list.sortBy} className="nav-item">
                                <div 
                                    className={this.getClassName(list.sortBy)}
                                    onClick={() => onChangeSortBy(list.sortBy)}
                                >
                                    {list.title}
                                </div>
                            </li> 
                        )
                    })
                }
                
            </ul>
        );
    }
}