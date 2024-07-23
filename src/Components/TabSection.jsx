import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import List from "./List";
import PropTypes from "prop-types";
import "react-tabs/style/react-tabs.css";
import "./TabSection.css";

export default function TabSection({
    // currentDate,
    flowers,
    setFlowers,
    farmFlowers,
    setFarmFlowers,
    greenFlowers,
    setGreenFlowers,
    inputValue,
    setInputValue,
    editId,
    setEditId,
    history,
    setHistory,
    redoStack,
    setRedoStack
}) {
    return (
        <Tabs>
            <TabList className="TabList">
                <Tab className="Tab">Голандська🌸</Tab>
                <Tab className="Tab">Фермерська🌼</Tab>
                <Tab className="Tab">Зелень🌿</Tab>
            </TabList>

            <TabPanel>
                <List
                    flowers={flowers}
                    setFlowers={setFlowers}
                    farmFlowers={farmFlowers}
                    setFarmFlowers={setFarmFlowers}
                    greenFlowers={greenFlowers}
                    setGreenFlowers={setGreenFlowers}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    editId={editId}
                    setEditId={setEditId}
                    history={history}
                    setHistory={setHistory}
                    redoStack={redoStack}
                    setRedoStack={setRedoStack}
                    filter="holland"
                />
            </TabPanel>
            <TabPanel>
                <List
                    flowers={flowers}
                    setFlowers={setFlowers}
                    farmFlowers={farmFlowers}
                    setFarmFlowers={setFarmFlowers}
                    greenFlowers={greenFlowers}
                    setGreenFlowers={setGreenFlowers}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    editId={editId}
                    setEditId={setEditId}
                    history={history}
                    setHistory={setHistory}
                    redoStack={redoStack}
                    setRedoStack={setRedoStack}
                    filter="farm"
                />
            </TabPanel>
            <TabPanel>
                <List
                    flowers={flowers}
                    setFlowers={setFlowers}
                    farmFlowers={farmFlowers}
                    setFarmFlowers={setFarmFlowers}
                    greenFlowers={greenFlowers}
                    setGreenFlowers={setGreenFlowers}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    editId={editId}
                    setEditId={setEditId}
                    history={history}
                    setHistory={setHistory}
                    redoStack={redoStack}
                    setRedoStack={setRedoStack}
                    filter="green"
                />
            </TabPanel>
        </Tabs>
    );
}

TabSection.propTypes = {
    currentDate: PropTypes.string.isRequired,
    flowers: PropTypes.array.isRequired,
    setFlowers: PropTypes.func.isRequired,
    farmFlowers: PropTypes.array.isRequired,
    setFarmFlowers: PropTypes.func.isRequired,
    greenFlowers: PropTypes.array.isRequired,
    setGreenFlowers: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    editId: PropTypes.number,
    setEditId: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired,
    setHistory: PropTypes.func.isRequired,
    redoStack: PropTypes.array.isRequired,
    setRedoStack: PropTypes.func.isRequired
}