import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <div className = "title">About Us</div>
                    <p className = "text">Cal State Fullerton is a leading campus of the CSU, serving as an intellectual and cultural center for Southern California and driver of workforce and economic development. We are an emerging national model for supporting student success through innovative high-impact educational and co-curricular experiences, including faculty-student collaborative research.</p>
                </div>
                <div className="column">
                <div className = "title">Student Demographics</div>
                    <p className = "text">41,408 enrolled in fall 2020 (58.5% female)
Average age of students: 23 years
International students from 72 nations / total 1,266 (fall 2020)</p>
                </div>
                <div className="column">
                <div className = "title">Campus Info</div>
                    <p className = "text">Physical Address
                        California State University, Fullerton
                        800 N. State College Blvd.
                        Fullerton, CA 92831-3599   |   
                        General: 657-278-2011   |  
                        © California State University, Fullerton. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;