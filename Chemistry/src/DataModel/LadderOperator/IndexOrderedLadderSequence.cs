﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using System.Linq;
using System.Collections.Generic;

namespace Microsoft.Quantum.Chemistry
{

    /// <summary>
    /// Class representing a sequence of raising and lowering operators, subject to the additional constraints: 
    /// 1) Normal-ordered, where all raising operators are to the left of all lowering operators.
    /// 2) Index-ordered, where are raising(lowering) operators are in ascending(descending) order.
    /// </summary>
    public class IndexOrderedLadderSequence : NormalOrderedLadderSequence
    {
        #region Constructors
        /// <summary>
        /// Constructor for empty ladder operator sequence.
        /// </summary>
        internal IndexOrderedLadderSequence() : base() { }

        /// <summary>
        /// Construct a copy of the input instance.
        /// </summary>
        /// <param name="ladderOperators">Sequence of ladder operators.</param>
        public IndexOrderedLadderSequence(IndexOrderedLadderSequence ladderOperators)
        {
            // All constructions are pass by value.
            sequence = ladderOperators.sequence.Select(o => o).ToList();
            coefficient = ladderOperators.coefficient;
        }

        /// <summary>
        /// Construct instance from a normal-ordered sequence of ladder operators.
        /// </summary>
        /// <param name="ladderOperators">Normal-ordered sequence of ladder operators.</param>
        public IndexOrderedLadderSequence(LadderSequence ladderOperators) : base(ladderOperators)
        {
            ToIndexOrder();
        }
        #endregion
        
    }

}



