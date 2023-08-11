import React from "react";
import Styles from "./homediv.css" // eslint-disable-next-line

function Homediv() {
    return(
    
        <div className="homediv">
            <div className="grid_col">
                <div className="grid">
                        <div className="grid__item">
                            <div className="card"><img className="card__img" src="https://blog.kakaocdn.net/dn/1fQQ7/btrVtGM3mVv/NND2A2qPZpuD75hD1bWq4K/img.jpg" alt="Snowy Mountains" />
                                <div className="card__content">
                                    <h1 className="card__header">안전운전 통합민원</h1>
                                    <button class="card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img className="card__img" src="https://play-lh.googleusercontent.com/yxGaVmpwCZ9OKgK0MxgeqdQku9zgO5WRN8MjpuycD5BNdfcGSvu8iEB1gERiFBePP2A" alt="Desert" />
                                <div className="card__content">
                                    <h1 className="card__header">레츠코레일</h1>
                                    <button class="card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card"><img className="card__img" src="https://play-lh.googleusercontent.com/763H-3dcJk80jKe9LCR2Vyzg_fPx4FeUPZFo-gCg0pYnq3-KkhGm_Mei7sgklNhruw=w600-h300-pc0xffffff-pd" alt="Canyons" />
                                <div className="card__content">
                                    <h1 className="card__header">고속버스 통합예매</h1>
                                    <button class="card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid">
                        <div className="grid__item">
                            <div className="card"><img className="card__img" src="https://blog.kakaocdn.net/dn/1fQQ7/btrVtGM3mVv/NND2A2qPZpuD75hD1bWq4K/img.jpg" alt="Snowy Mountains" />
                                <div className="card__content">
                                    <h1 className="card__header">안전운전 통합민원</h1>
                                    <button class="card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img className="card__img" src="https://play-lh.googleusercontent.com/yxGaVmpwCZ9OKgK0MxgeqdQku9zgO5WRN8MjpuycD5BNdfcGSvu8iEB1gERiFBePP2A" alt="Desert" />
                                <div className="card__content">
                                    <h1 className="card__header">레츠코레일</h1>
                                    <button class="card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card"><img className="card__img" src="https://play-lh.googleusercontent.com/763H-3dcJk80jKe9LCR2Vyzg_fPx4FeUPZFo-gCg0pYnq3-KkhGm_Mei7sgklNhruw=w600-h300-pc0xffffff-pd" alt="Canyons" />
                                <div className="card__content">
                                    <h1 className="card__header">고속버스 통합예매</h1>
                                    <button class="card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>

                    </div>
              
            </div>
        </div>

    );
}

export default Homediv;