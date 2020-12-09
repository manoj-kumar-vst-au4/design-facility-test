import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
import Axios from 'axios';
export default function Container() {
    const [data, setData] = React.useState([]);
    const sections = data.sections;
    const [timer, setTimer] = React.useState(10);
    const [selectSection, setSelectSection] = React.useState('Section1');
    const [SelectedData, setSelectedData] = React.useState([]);
    const [selectedOption, setSelectedOPtion] = React.useState('');
    const [qIndex, setQIndex] = React.useState(0);
    const [qText, setQText] = React.useState('');
    const [op1, setop1] = React.useState('');
    const [op2, setop2] = React.useState('');
    const [op3, setop3] = React.useState('');
    const [op4, setop4] = React.useState('');
    const onHandleOption = (id) => {
        setSelectedOPtion(id);
    }
    const fetchData = () => {
        Axios.get('http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/manojkumar').then(
            (res) => {
                setData(res.data.exam);
                setSelectedData(res.data.exam.sections[0].Section1);
                setQText(res.data.exam.sections[0].Section1[0].quesText)
                setop1(res.data.exam.sections[0].Section1[0].option1)
                setop2(res.data.exam.sections[0].Section1[0].option2)
                setop3(res.data.exam.sections[0].Section1[0].option3)
                setop4(res.data.exam.sections[0].Section1[0].option4)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }
    const changeQ = (index) => {
        setQIndex(index);
        setQText(SelectedData[index].quesText)
        setop1(SelectedData[index].option1)
        setop2(SelectedData[index].option2)
        setop3(SelectedData[index].option3)
        setop4(SelectedData[index].option4)
    }
    const onSave = async () => {
        if (SelectedData.length > qIndex + 1) {
            await setQIndex(qIndex + 1);
            setQText(SelectedData[qIndex + 1].quesText)
            setop1(SelectedData[qIndex + 1].option1)
            setop2(SelectedData[qIndex + 1].option2)
            setop3(SelectedData[qIndex + 1].option3)
            setop4(SelectedData[qIndex + 1].option4)
        }
    }
    const onClickSection = async (value) => {
        await setQIndex(0);
        await setSelectSection(value);

        if (value === "Section1") {
            await setSelectedData(sections[0].Section1);
            setQText(sections[0].Section1[0].quesText)
            setop1(sections[0].Section1[0].option1)
            setop2(sections[0].Section1[0].option2)
            setop3(sections[0].Section1[0].option3)
            setop4(sections[0].Section1[0].option4)

        } else if (value === "Section2") {
            setQIndex(0);
            setSelectedData(sections[1].Section2);
            setQText(sections[1].Section2[0].quesText)
            setop1(sections[1].Section2[0].option1)
            setop2(sections[1].Section2[0].option2)
        } else {
            setSelectedData(sections[2].Section3);
            setQText(sections[2].Section3[0].quesText)
            setop1(sections[2].Section3[0].option1)
            setop2(sections[2].Section3[0].option2)
            setop3(sections[2].Section3[0].option3)
            setop4(sections[2].Section3[0].option4)
        }
    }
    React.useEffect(() => {
        fetchData();
    }, []);

    const clearResponse = () => {
        setSelectedOPtion('');
    }
    return (
        <div className="row-align">
            <div className="main">
                <Header data={data} timer={timer}sections={sections} selectSection={selectSection} onClickSection={onClickSection} qIndex={qIndex} />
                <Body data={data} qText={qText} op1={op1} op2={op2} op3={op3} op4={op4} onHandleOption={onHandleOption} selectedOption={selectedOption} />
                <Footer onSave={onSave} clearResponse={clearResponse} />
            </div>
            <div>
                <SideBar selectSection={selectSection} SelectedData={SelectedData} changeQ={changeQ} />
            </div>
        </div>
    )
}
