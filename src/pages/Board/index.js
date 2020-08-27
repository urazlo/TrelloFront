/* eslint-disable no-console */

import React from 'react';

import { connect } from 'react-redux';

import Column from 'ui/components/Column';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { getColumnsRequest, editColumnRequest, createColumnRequest } from 'api/columnApi';
import { getCardsRequest } from 'api/cardApi';
import { updateColumnsAction, addColumnAction, updateCardsAction, editColumnAction, sortAction } from 'store/main/actions';
import StyledPage from 'pages/Board/components/StyledPage';
import StyledMenu from 'pages/Board/components/StyledMenu';

class Board extends React.Component {
  state = {
    title: '',
    anchorEl: null,
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log('destination', destination);
    console.log('source', source);
    console.log('draggableId', draggableId);
    console.log('type', type);

    if (!destination) {
      return;
    }

    this.props.sortAction(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type,
    );
  };

  async componentDidMount() {
    const columns = await getColumnsRequest(this.props.match.params.id);
    this.props.updateColumnsAction(columns);
    const cards = await getCardsRequest();
    this.props.updateCardsAction(cards);
  }

  handleClick = (ev) => {
    this.setState({ anchorEl: ev.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  addColumn = async () => {
    try {
      const { title } = this.state;
      const boardId = this.props.match.params.id;
      const column = await createColumnRequest({ title, boardId });

      this.props.addColumnAction(column);

      this.setState({ title: '' });
      this.handleClose();
    } catch (err) {
      console.log(err.response.data);
    }
  }

  onChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  }

  onInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addColumn();
    }

    if (e.key === 'Escape') {
      this.setState({ title: '' });
      this.handleClose();
    }
  };

  editColumnTitle = async (columnId, title) => {
    try {
      const userId = this.props.user.id;
      const column = await editColumnRequest({ userId, title, columnId });
      this.props.editColumnAction(column);

      this.setState({ title: '' });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  onAcceptClickHandler = () => {
    this.addColumn();
  }

  onCancelClickHandler = () => {
    this.setState({ title: '' });
    this.handleClose();
  }

  render() {
    const { title, anchorEl } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <StyledPage>
          <Droppable droppableId="all-lists" direction="horizontal" type="column">
            {provided => (
              <div
                className="column-list-wrapper"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.props.columns !== null && this.props.columns.map((column, index) => (
                  <Column
                    key={column.id}
                    columnId={column.id}
                    columnTitle={column.title}
                    editColumnTitle={this.editColumnTitle}
                    columnIndex={index}
                  />
                ))}
                {provided.placeholder}

                <Button
                  className="column-add-menu-open-button"
                  onClick={this.handleClick}
                >
                  <span className="column-add-menu-open-placeholder">
                    + Add another column
            </span>
                </Button>

                <StyledMenu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <TextField
                    value={title}
                    variant="outlined"
                    required
                    className="column-add-input"
                    onKeyDown={this.onInputKeyDown}
                    onChange={this.onChangeHandler}
                  />

                  <div className="column-add">
                    <Button
                      className="column-add-accept-button"
                      onClick={this.onAcceptClickHandler}
                    >
                      Add column
                </Button>

                    <CloseIcon
                      className="column-add-cancel-button"
                      onClick={this.onCancelClickHandler}
                    />
                  </div>
                </StyledMenu>
              </div>
            )}
          </Droppable>
        </StyledPage>
      </DragDropContext>
    );
  }
}

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
    columns: main.columns,
  }),
  {
    updateColumnsAction,
    editColumnAction,
    updateCardsAction,
    addColumnAction,
    sortAction,
  },
);

export default connectFunction(Board);
