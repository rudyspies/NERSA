/*! NERSA tariff v1.0 Sep 2023 */

function get_tariff(month, wkday, hr) {
const LDS_WKD=[0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,2,2,1,1,0,0];
const LDS_SAT=[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0];
const LDS_SUN=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const HDS_WKD=[0,0,0,0,0,0,2,2,2,1,1,1,1,1,1,1,1,2,2,1,1,1,0,0];
const HDS_SAT=[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0];
const HDS_SUN=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const LH_MONTHS=[0,0,0,0,0,1,1,1,0,0,0,0]; // JUN-AUG
let HDS=false;

	if (LH_MONTHS[month]==1) HDS=true; // high demand season
	switch (wkday) { // 0 to 6
		case 0:
		case 1:
		case 2:
		case 3:
		case 4: if (HDS) return(HDS_WKD[hr]); else return(LDS_WKD[hr]); break;
		case 5: if (HDS) return(HDS_SAT[hr]); else return(LDS_SAT[hr]); break;
		case 6: if (HDS) return(HDS_SUN[hr]); else return(LDS_SUN[hr]); break;
	}
}
	

	
