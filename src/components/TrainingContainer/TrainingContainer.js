import styled from 'styled-components';

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: ${p => (p.trainingStarted ? 'column' : 'column-reverse')};
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${p => p.theme.media.tablet} {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    // padding: ${p => p.theme.space[5]}px;
  }
`;

//  <StyledContainer>
//       <WrapperBody>
//         {isMobileDevice ? (
//           <CenterFlexBox>
//             {isTrainingStarted ? (
//               <></>
//             ) : (
//               <>
//                 <MobileLinkToSecondPage to="/mobileTraingBookTable " />
//                 <TrainingDataSelection />
//               </>
//             )}
//           </CenterFlexBox>
//         ) : (
//           <CenterFlexBox>
//             {isTrainingStarted ? (
//               <TrainingContainer trainingStarted>
//                 <Timer endDate={endDate} />
//                 <MyGoal
//                   trainingStarted
//                   statistic={myGoalParamsTrainingStarted}
//                 />
//               </TrainingContainer>
//             ) : (
//               <TrainingContainer>
//                 <TrainingDataSelection />
//                 <MyGoal statistic={myGoalParams} />
//               </TrainingContainer>
//             )}

//             <LibBookTable data={books} training />
//             {!isTrainingStarted && (
//               <Button
//                 onClick={onStartTrainingClick}
//                 textContent={t('startTraining')}
//                 active
//                 size={200}
//                 disabled={!isExistTrainingDate}
//                 type="button"
//               />
//             )}
//           </CenterFlexBox>
//         )}
//       </WrapperBody>
//     </StyledContainer>
//   );
// };
