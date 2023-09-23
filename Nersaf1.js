/*! NERSA tariff v1.0 Sep 2023 */

function get_tariff(month, wkday, hr) {
const LDS_WKD=[0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,2,2,1,1,0,0];
const LDS_SAT=[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0];
const LDS_SUN=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const HDS_WKD=[0,0,0,0,0,0,2,2,2,1,1,1,1,1,1,1,1,2,2,1,1,1,0,0];
const HDS_SAT=[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0];
const HDS_SUN=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	switch (wkday) { // 0 to 6
		case 0:
		case 1:
		case 2:
		case 3:
		case 4: return(LDS_WKD[hr]); break;
		case 5: return(LDS_SAT[hr]); break;
		case 6: return(LDS_SUN[hr]); break;
	}
}
	