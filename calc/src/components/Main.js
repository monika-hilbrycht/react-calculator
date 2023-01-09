import React from 'react';

function Main()

{

    return (
        <div className='row justify-content-center'>

            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

                <h1>React Calc</h1>

                <table className='table'>
                    <tr>
                       <td colSpan='3'><input type="text"></input></td>
                        <td><button>C</button></td>
                    </tr>

                    <tr>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>/</button></td>
                    </tr>
                    <tr>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>-</button></td>
                    </tr>
                    <tr>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>+</button></td>
                    </tr>
                    <tr>
                    <td><button>.</button></td>
                    <td><button>0</button></td>
                    <td><button>=</button></td>
                    <td><button>*</button></td>
                    </tr>

                </table>

            </div>

        </div>
    )

}

export default Main;